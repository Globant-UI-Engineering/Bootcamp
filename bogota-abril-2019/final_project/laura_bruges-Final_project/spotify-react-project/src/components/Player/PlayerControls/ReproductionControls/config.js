import { play as playIcon } from 'react-icons-kit/fa/play';
import { backward as backwardIcon } from 'react-icons-kit/fa/backward';
import { forward as forwardIcon } from 'react-icons-kit/fa/forward';
import { pause as pauseIcon } from 'react-icons-kit/fa/pause';

const reprodControlBaseClass = 'player-control btn-sm';

export const reprodControlType = {
    backwardBtn: 'BACKWARD',
    playBtn: 'PLAY',
    pauseBtn: 'PAUSE',
    forwardBtn: 'FORWARD'
}

export const reprodControls = {
    'BACKWARD' : {
        title: 'Backward',
        icon: backwardIcon,
        cssClasses: `${reprodControlBaseClass} change-track-btn`        
    },
    'PLAY' : {
        title: 'Play',
        icon: playIcon,
        cssClasses: `${reprodControlBaseClass} play-btn`        
    },
    'PAUSE' : {
        title: 'Pause',
        icon: pauseIcon,
        cssClasses: `${reprodControlBaseClass} play-btn`        
    }, 
    'FORWARD': {
        title: 'Forward',
        icon: forwardIcon,
        cssClasses: `${reprodControlBaseClass} change-track-btn`        
    }
};