import React from 'react'
import './project_block.scss'

function ProjectBlock(props) {
    return (
        <div className='project_container'>
            <div className='img_container' >
                <div className='project_img'
                    style={{ backgroundImage: `url(${props.img})` }}>

                </div>
                <span className='project_text'>{props.text}</span>
            </div>
        </div>
    )
}
export default ProjectBlock