import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";
import './list.css';

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <span className="editButtons">
                    <button className="btn btn-primary"
                        onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>
                    <button className="green-button btn btn-primary"
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add
                    </button>
                </span>
                <div className="editArea">
                    <input className="editText"
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        } /> <br />
                    <textarea className="editText"
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        } />
                </div>
            </li>
            {moduleList
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <span className="editButtons">
                            <button className="red-button btn btn-primary"
                                onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>
                            <button className="green-button btn btn-primary"
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                        </span>
                        <h3>{module.name}</h3>
                        <p>{module.description}</p>
                    </li>
                ))}
        </ul>
    );
}
export default ModuleList;