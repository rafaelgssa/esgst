import { Settings } from './Settings';
import { Popup } from './Popup';
import { Shared } from './Shared';
import { DOM } from './DOM';

const INFO = 'info';
const WARNING = 'warning';
const ERROR = 'error';
const PRIORITY = [ERROR, WARNING, INFO];

class _Logger {
	constructor() {
		this.logs = [];
		this.button = null;
		this.currentMaxLevel = INFO;
	}

	info() {
		const message = this.getMessage(arguments);
		window.console.info(message);
		this.logs.push({ level: INFO, message });
		if (Settings.get('notifyLogs')) {
			this.addButton(INFO);
		}
	}

	warning() {
		const message = this.getMessage(arguments);
		window.console.warn(message);
		this.logs.push({ level: WARNING, message });
		if (Settings.get('notifyLogs')) {
			this.addButton(WARNING);
		}
	}

	error() {
		const message = this.getMessage(arguments);
		window.console.error(message);
		this.logs.push({ level: ERROR, message });
		if (Settings.get('notifyLogs')) {
			this.addButton(ERROR);
		}
	}

	getMessage(args) {
		return `[ESGST] ${Array.from(args)
			.map((x) => (typeof x === 'string' ? x : JSON.stringify(x)))
			.join(' ')}`;
	}

	addButton(level) {
		if (this.button) {
			if (PRIORITY.indexOf(level) < PRIORITY.indexOf(this.currentMaxLevel)) {
				this.button.nodes.outer.classList.remove(`esgst-logs-${this.currentMaxLevel}`);
				this.button.nodes.outer.classList.add(`esgst-logs-${level}`);
				this.currentMaxLevel = level;
			}
			return;
		}

		this.button = Shared.header.addButtonContainer({
			buttonIcon: 'fa fa-bug',
			buttonName: 'ESGST Logs',
			isActive: true,
			isNotification: true,
			side: 'right',
		});

		this.button.nodes.outer.classList.add('esgst-logs', `esgst-logs-${level}`);
		this.button.nodes.buttonIcon.title = Shared.common.getFeatureTooltip('notifyLogs', 'View logs');

		this.button.nodes.outer.addEventListener('click', this.showPopup.bind(this));
		this.currentMaxLevel = level;
	}

	showPopup() {
		const popup = new Popup({
			addScrollable: 'left',
			icon: 'fa-bug',
			isTemp: true,
			title: 'Logs',
		});
		DOM.insert(
			popup.scrollable,
			'beforeend',
			<div className="popup__keys__list">
				{this.logs.map((x) => (
					<div className={`esgst-log esgst-log-${x.level}`}>{x.message}</div>
				))}
			</div>
		);
		popup.open();
	}
}

const Logger = new _Logger();

export { Logger };
