import state, { functions } from './redux/state';
import { rerenderEntireTree } from './render';

import './index.css';

rerenderEntireTree(state, functions);

// пофиксить баг с добавлением больше одного поста,
// сделать очишение текста и т.п.
