import React from "react";
import ProjectBlock from "../components/project_block/project_block";
import projectsData from './projectsData'
import './projectCont.scss'
import ProductTitles from "../components/product title/product_title";

const ProjectCont = () => {
    return (
        <div className="projects_wrraper">
            <ProductTitles title={"Projects"}  className='p-title'/>
            <div className="projects_cont">
                {projectsData.map((el) => {
                    return <ProjectBlock text={el.text} img={el.img} />
                })}
            </div>
        </div>

    )
}
export default ProjectCont