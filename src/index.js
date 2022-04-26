import React from 'react';
import { createRoot } from 'react-dom/client';

import { JournalApp } from './JournalApp';
import './styles/styles.scss'
import 'animate.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<JournalApp />);


