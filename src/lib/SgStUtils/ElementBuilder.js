import { utils } from '../jsUtils';

class ElementBuilder {
  constructor() {

  }
  
  createElements(context, position, items) {
    try {
      if (Array.isArray(context)) {
        items = context;
        context = null;
      }
      if (position && position === `inner`) {
        context.innerHTML = ``;
      }
      if (!items || !items.length) {
        return;
      }
      const fragment = document.createDocumentFragment();
      let element = null;
      this.buildElements(fragment, items);
      if (!context) {
        return fragment;
      }
      switch (position) {
        case `beforeBegin`:
          context.parentElement.insertBefore(fragment, context);
          element = context.previousElementSibling;
          break;
        case `afterBegin`:
          context.insertBefore(fragment, context.firstElementChild);
          element = context.firstElementChild;
          break;
        case `beforeEnd`:
          context.appendChild(fragment);
          element = context.lastElementChild;
          break;
        case `afterEnd`:
          context.parentElement.insertBefore(fragment, context.nextElementSibling);
          element = context.nextElementSibling;
          break;
        case `inner`:
          context.appendChild(fragment);
          element = context.firstElementChild;
          break;
        case `outer`:
          context.parentElement.insertBefore(fragment, context);
          element = context.previousElementSibling;
          context.remove();
          break;
      }
      return element;
    } catch (error) {
      console.log(error);
    }
  }

  buildElements(context, items) {
    for (const item of items) {
      if (!item) {
        continue;
      }
      if (typeof item === `string`) {
        const node = document.createTextNode(item);
        context.appendChild(node);
        continue;
      } else if (!Array.isArray(item)) {
        context.appendChild(item);
        continue;
      }
      const element = document.createElement(item[0]);
      if (utils.isSet(item[1])) {
        if (Array.isArray(item[1])) {
          this.buildElements(element, item[1]);
        } else if (typeof item[1] === `object`) {
          for (const key in item[1]) {
            if (item[1].hasOwnProperty(key)) {
              if (key === `ref`) {
                item[1].ref(element);
              } else if (key === `extend`) {
                item[1].extend = item[1].extend.bind(null, element);
              } else if (key.match(/^on/)) {
                element.addEventListener(key.replace(/^on/, ``), item[1][key]);
              } else {
                element.setAttribute(key, item[1][key]);
              }
            }
          }
        } else {
          element.textContent = item[1];
        }
      }
      if (utils.isSet(item[2])) {
        if (Array.isArray(item[2])) {
          this.buildElements(element, item[2]);
        } else {
          element.textContent = item[2];
        }
      }
      context.appendChild(element);
    }
  }
}

class SgNotification extends ElementBuilder {
  /**
   * @param {Object} [options]
   * @param {"success"|"warning"} options.type
   * @param {String[]} options.icons
   * @param {String} options.message
   */
  constructor(options) {
    super();
    this.createElements(null, null, [
      [`div`, { ref: ref => this.notification = ref }, [
        [`i`, { ref: ref => this.icon = ref }],
        ` `,
        [`span`, { ref: ref => this.message = ref }]
      ]]
    ]);
    options = Object.assign({
      type: `warning`,
      icons: [],
      message: ``
    }, options);
    this.setType(options.type);
    this.setIcons(options.icons);
    this.setMessage(options.message);
  }

  setType(type) {
    this.notification.className = `notification notification--${type} notification--margin-top-small`;
  }

  setIcons(icons) {
    this.icon.className = `fa fa-fw ${icons.join(` `)}`;
  }

  setMessage(text) {
    this.message.textContent = text;
  }
}

const elementBuilder = {
  sg: {
    notification: SgNotification
  },
  st: {

  }
};

export { elementBuilder };