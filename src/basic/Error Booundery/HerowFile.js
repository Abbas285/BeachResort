import React from 'react'

function HerowFile({HeroN}) {
    if(HeroN=='jopker'){
        throw new Error('Not a Hero!')
    }
    return (
        <div>
            {HeroN}
        </div>
    )
}

export default HerowFile;
