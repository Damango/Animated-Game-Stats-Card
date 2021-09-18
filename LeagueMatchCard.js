import React from 'react'
import "./LeagueMatchCard.css"

const LeagueMatchCard = (props) => {
    return (<div className="match-card-wrapper">
        <div className="match-card-tabs-container">
            <div className="match-type-container card-tab">Ranked Solo</div>
            <div className="victory-loss-container card-tab victory" style={{ borderRight: '1px solid black' }}>Victory</div>
        </div>
        <div className="match-card-container">
            <div className="icon-rank-container card-data-container">
                <div className="icon"></div>
                <div className="rank-container">Diamond 1</div>
            </div>
            <div className="summoners-lp-container card-data-container">
                <div className="summoners-container">
                    <div className="summoner" style={{ left: '0px', top: '0px', position: 'absolute' }}></div>
                    <div className="summoner" style={{ right: '0px', top: '0px', position: 'absolute' }}></div>
                    <div className="summoner" style={{ left: '0px', bottom: '0px', position: 'absolute' }}></div>
                    <div className="summoner" style={{ right: '0px', bottom: '0px', position: 'absolute' }}></div>
                </div>
                <div className="lp-container">+23 LP</div>
            </div>
            <div className="kda-container card-data-container">
                <div className="kills-container">21 / 0 / 12</div>
                <div className="kda-count-contianer">33 KDA</div>
            </div>
            <div className="cs-gold-container card-data-container">
                <div className="cs-container">313 (9.8) CS</div>
                <div className="gold-container"><i class="fas fa-coins"></i>19,000</div>
            </div>
            <div className="items-container card-data-container">
                <div className="items-icon-wrapper">
                    <div className="item-icon"></div>
                    <div className="item-icon"></div>
                    <div className="item-icon"></div>
                    <div className="item-icon"></div>
                    <div className="item-icon"></div>
                    <div className="item-icon"></div>
                    <div className="item-icon"></div>
                    <div className="item-icon"></div>
                </div>


            </div>
            <div className="players-container card-data-container">
                <div className="red-side">
                    <div className="user-container">
                        <div className="user-icon"></div>
                        <div className="username">SADE</div>
                    </div>
                    <div className="user-container">
                        <div className="user-icon"></div>
                        <div className="username">SADE</div>
                    </div>
                    <div className="user-container">
                        <div className="user-icon"></div>
                        <div className="username">SADE</div>
                    </div>
                    <div className="user-container">
                        <div className="user-icon"></div>
                        <div className="username">SADE</div>
                    </div>
                    <div className="user-container">
                        <div className="user-icon"></div>
                        <div className="username">SADE</div>
                    </div>
                </div>
                <div className="blue-side">
                    <div className="user-container">
                        <div className="user-icon"></div>
                        <div className="username">SADE</div>
                    </div>
                    <div className="user-container">
                        <div className="user-icon"></div>
                        <div className="username">SADE</div>
                    </div>
                    <div className="user-container">
                        <div className="user-icon"></div>
                        <div className="username">SADE</div>
                    </div>
                    <div className="user-container">
                        <div className="user-icon"></div>
                        <div className="username">SADE</div>
                    </div>
                    <div className="user-container">
                        <div className="user-icon"></div>
                        <div className="username">SADE</div>
                    </div>
                </div>


            </div>
        </div>
    </div>);
}

export default LeagueMatchCard;