import React from 'react'
import Header from '../components/Header2'
import '../Pages/QuizFilters.css'

function QuizFilters() {

    return (
        <>
            <Header/>
            <div className="page-body">
                <div className="page-content">
                    <div className="auto-grading">
                        <div className="title">
                            Auto-Grading Filters
                        </div>
                        <div className="desc">
                            Enhance the precision of query grading on the 'AutoGrading Filters' page.
                            Configure filters to tailor the assessment of student answers and ensure accurage evaluations within DataWiz.
                        </div>

                        <hr className="line"></hr>
                    </div>
                    <div className="filter-body">
                        <div className="quiz-name">
                            * Quiz Name *
                        </div>
                        <div className="filters">
                            <div className="filter-1">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                                <div className="filter-name">JOIN VS INNER-JOIN</div>
                            </div>
                            <div className="filter-2">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>                                <div className="filter-name">Spell Checker</div>
                            </div>
                            <div className="filter-3">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>   
                                <div className="filter-name">Case Sensitive</div>
                            </div>
                            <div className="filter-4">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>   
                                <div className="filter-name">Typo</div>
                            </div>
                            <div className="filter-5">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>   
                                <div className="filter-name">FROM-JOIN</div>
                            </div>
                            <div className="filter-6">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>   
                                <div className="filter-name">Table Comparison</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )

}


export default QuizFilters