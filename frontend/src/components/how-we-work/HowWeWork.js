import React from 'react';
import './HowWeWork.scss';

export default function HowWeWork() {

    return (
        <div className="how-we-work-rect">
            <div className="max-width-1090">
                <div className="corner-header">
                    <div className="corner-left" />
                    <div className="corner-text">
                        <div>КАК</div>
                        <div>МЫ РАБОТАЕМ?</div>
                    </div>
                </div>
                <div className="steps mx-auto">
                    <div className="left-block">
                        <div className="d-flex align-items-center">
                            <p>Мы уточняем детали и делаем замеры</p>
                            <div className="step">2</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <p>Утверждаем и заключаем с Вами договор</p>
                            <div className="step">4</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <p>Приезжаем к Вам и устанавливаем конструкцию</p>
                            <div className="step">6</div>
                        </div>
                    </div>
                    <div className="lines">
                        <div>
                            <div className="left-lines" />
                            <div className="left-lines" />
                        </div>
                        <div>
                            <div className="right-lines" />
                            <div className="right-lines" />
                        </div>
                    </div>
                    <div className="right-block">
                        <div className="d-flex align-items-center">
                            <div className="step pl-9px">1</div>
                            <p>Вы звоните нам для консультации</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="step">3</div>
                            <p>Рассчитываем стоимость проека</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="step">5</div>
                            <p>Закупаем материалы и выполняем работу согласно проекту</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
