import { play as playIcon } from 'react-icons-kit/fa/play';
import { pause as pauseIcon } from 'react-icons-kit/fa/pause';
import { random as randomIcon } from 'react-icons-kit/fa/random';

const baseClass = 'rep-icon';

export const itemIcons = {
    play: {
        icon: playIcon,
        title: 'Play'
    },
    pause: {
        icon: pauseIcon,
        title: 'Pause'
    },
    random: {
        icon: randomIcon,
        title: 'Shuffle'
    }
}

export const cssClasses = {
    active: `${baseClass} active-icon`,
    regular: baseClass
}