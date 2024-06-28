const { v4: uuidv4 } = require('uuid');

const used = uuidv4();
console.log(used);
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

alert({
text: 'Notice me, senpai!',
});