import React from "react";
import './staffCont.scss'
import { staffData } from "./staffData";
import StaffBlock from "../components/staff_block/staffBlock";
import ProductTitles from "../components/product title/product_title";
const StaffCont = () => {
    return (
        <div className="staff-Wraper">
            <ProductTitles title={"About"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
            <div className="staff-cont">
                {staffData.map((el) => {
                    return <StaffBlock img={el.img} name={el.name} prof={el.prosffesion} desc={el.desc} />
                })}
            </div>
        </div>
    )
}
export default StaffCont
