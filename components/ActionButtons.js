import { FaBackspace } from '@react-icons/all-files/fa/FaBackspace'
import { GiBackwardTime } from '@react-icons/all-files/gi/GiBackwardTime'
import { memo } from 'react';

function backSpace(setQuestion) {
    return setQuestion(prev => prev.slice(0,-1))
  }

function ActionButton({setQuestion}) {
    return (<section className='flex justify-between h-full mb-1'>
        <div>
            <button><GiBackwardTime size={30} color='#A9A9A9' /></button>
        </div>
        <div>
            <button><FaBackspace size={30} color='#A9A9A9' onClick={() => backSpace(setQuestion)} /></button>
        </div>
    </section>);
}

ActionButton = memo(ActionButton)

export {
    ActionButton
};