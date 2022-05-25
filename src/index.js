import state, { functions } from './redux/state';
import { rerenderEntireTree } from './render';

import './index.css';

rerenderEntireTree(state, functions);
