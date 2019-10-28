import { Module } from '../../class/Module';
import { Process } from '../../class/Process';
import { Shared } from '../../class/Shared';

class CommentsCommentHistory extends Module {
  constructor() {
    super();
    this.info = {
      description: [
        ['ul', [
          ['li', `Replaces SteamGifts' native comment button with a new one, so that ESGST can track your comments.`],
          ['li', [
            `Adds a button (`,
            ['i', { class: 'fa fa-comments esgst-yellow' }],
            ` My Comment History) to the dropdown menu accessible by clicking on the arrow next to your avatar at the header of any page that allows you to view your comment history.`
          ]]
        ]]
      ],
      id: 'ch',
      name: 'Comment History',
      sg: true,
      type: 'comments'
    };
  }

  init() {
    if (!Shared.esgst.sg) {
      return;
    }
    if (Shared.esgst.replyBox) {
      Shared.common.addReplyButton(Shared.esgst.replyBox);
    }

    const dropdownItem = Shared.header.addDropdownItem({
      buttonContainerId: 'account',
      description: 'View your comment history.',
      icon: 'fa fa-fw fa-comments icon-yellow yellow',
      name: 'My Comment History',
    });

    dropdownItem.nodes.outer.dataset.linkId = 'myCommentHistory';
    dropdownItem.nodes.outer.dataset.linkKey = 'account';
    dropdownItem.nodes.outer.title = Shared.common.getFeatureTooltip('ch');

    new Process({
      button: dropdownItem.nodes.outer,
      popup: {
        icon: 'fa-comments',
        title: 'Comment History',
        addProgress: true,
        addScrollable: 'left'
      },
      urls: {
        id: 'ch',
        init: this.ch_initUrls.bind(this),
        request: {
          request: this.ch_requestUrl.bind(this)
        }
      }
    });
  }

  async ch_initUrls(obj) {
    obj.ids = [];
    let comments = JSON.parse(Shared.common.getValue(`${Shared.esgst.name}CommentHistory`, '[]'));
    for (let i = 0, n = comments.length; i < n; i++) {
      obj.ids.push(comments[i].id);
      obj.items.push(`https://${window.location.hostname}/go/comment/${comments[i].id}`);
    }
  }

  ch_requestUrl(obj, details, response, responseHtml) {
    let comment = responseHtml.getElementById(obj.ids[obj.index]);
    if (Shared.esgst.sg) {
      comment = comment.closest('.comment');
      comment.firstElementChild.classList.remove('comment__parent');
      comment.firstElementChild.classList.add('comment__child');
    }
    comment.lastElementChild.remove();
    let parent = comment.parentElement.closest(`.comment, .comment_outer`);
    const items = [{
      attributes: {
        class: 'comment comments comment_outer'
      },
      type: 'div',
      children: []
    }];
    if (parent) {
      parent.lastElementChild.remove();
      Shared.common.createElements(parent, 'beforeEnd', [{
        attributes: {
          class: 'comment__children comment_children'
        },
        type: 'div',
        children: [{
          context: comment
        }]
      }]);
      items[0].children.push({
        context: parent
      });
    } else {
      if (Shared.esgst.st) {
        Shared.common.createElements(comment.getElementsByClassName('action_list')[0].firstElementChild, 'afterEnd', [{
          attributes: {
            href: response.finalUrl
          },
          text: responseHtml.title,
          type: 'a'
        }]);
      }
      if (Shared.esgst.sg) {
        items[0].children.push({
          attributes: {
            class: 'comments__entity'
          },
          type: 'div',
          children: [{
            attributes: {
              class: 'comments__entity__name'
            },
            type: 'p',
            children: [{
              attributes: {
                href: response.finalUrl
              },
              text: responseHtml.title,
              type: 'a'
            }]
          }]
        })
      }
      items[0].children.push({
        attributes: {
          class: 'comment__children comment_children'
        },
        type: 'div',
        children: [{
          context: comment
        }]
      });
    }
    Shared.common.createElements(obj.context, 'beforeEnd', items);
  }

  async ch_saveComment(id, timestamp) {
    let deleteLock = await Shared.common.createLock(`${Shared.esgst.name}CommentHistoryLock`, 300);
    let key = `${Shared.esgst.name}CommentHistory`;
    let comments = JSON.parse(Shared.common.getValue(key, '[]'));
    comments.unshift({
      id: id,
      timestamp: timestamp
    });
    await Shared.common.setValue(key, JSON.stringify(comments));
    deleteLock();
  }
}

const commentsCommentHistory = new CommentsCommentHistory();

export { commentsCommentHistory };