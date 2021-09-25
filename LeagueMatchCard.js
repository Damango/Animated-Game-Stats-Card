import React from 'react'
import "./LeagueMatchCard.css"
import { useEffect, useRef } from 'react';
import electrocuteIcon from "./media/electrocuteicon.png"
import sorceryIcon from "./media/sorceryicon.jpeg"
import flashIcon from "./media/flashicon.jpeg"
import teleportIcon from "./media/teleporticon.png"

import rabcapIcon from "./media/rabcapicon.jpeg";
import voidstaffIcon from "./media/voidstafficon.jpeg";
import nightharvesterIcon from "./media/nightharvester.jpeg"
import morelleoIcon from "./media/morelleoicon.jpeg";
import demonicIcon from "./media/demonic.jpeg"
import treadsIcon from "./media/treadsicon.jpeg"

import trinketIcon from "./media/trinketicon.jpeg"
import controlwardIcon from "./media/controlwardicon.jpeg"


import veigarIcon from "./media/veigaricon.png"
const LeagueMatchCard = (props) => {


    let matchCardContainerRef = useRef(null)



    useEffect(() => {

        let i;

        let matchCardContainers = document.querySelectorAll('.match-card-container');
        matchCardContainerRef.current.style.width = '100%'
        for (i = 0; i < matchCardContainers.length; i++) {
            matchCardContainers[i].style.transitionDelay = ((i + 1) * 100).toString() + 'ms'
            matchCardContainers[i].style.width = '100%'
        }

        let cardTabs = document.querySelectorAll('.card-tab');
        let cardDataContainer = document.querySelectorAll('.card-data-container');


        setTimeout(() => {
            for (i = 0; i < cardTabs.length; i++) {
                cardTabs[i].style.transitionDelay = ((i + 1) * 100).toString() + 'ms'
                console.log(((i + 1) * 100).toString() + 's')
                cardTabs[i].style.top = '0px'
                cardTabs[i].style.opacity = 1
            }

        }, 350)


        setTimeout(() => {
            for (i = 0; i < cardDataContainer.length; i++) {
                setTimeout(() => { }, i * 100)
                cardDataContainer[i].style.opacity = '1';
            }
        }, 500)
    }, [])


    function outcomeTagStyle() {
        if (props.matchData.matchOutcome === 'Victory') {
            return ('victory-loss-container card-tab Victory')
        }
        else {
            return ('victory-loss-container card-tab Defeat')
        }
    }

    function lpChangeStyle() {
        if (props.matchData.lpChange > 0) {
            return ('lp-container Victory')
        }
        else {
            return ('lp-container Defeat')
        }
    }



    return (<div className="match-card-wrapper">
        <div className="match-card-tabs-container">
            <div className="match-type-container card-tab">{props.matchData.matchType}</div>
            <div className={outcomeTagStyle()} style={{ borderRight: '1px solid black' }}>{props.matchData.matchOutcome}</div>
        </div>
        <div className="match-card-container" ref={matchCardContainerRef}>
            <div className="icon-rank-container card-data-container">
                <div className="icon"></div>
                <div className="rank-container">{props.matchData.playerRank}</div>
            </div>
            <div className="summoners-lp-container card-data-container">
                <div className="summoners-container">
                    <div className="summoner" style={{ left: '0px', top: '0px', position: 'absolute', backgroundImage: "url(" + electrocuteIcon + ")" }}></div>
                    <div className="summoner" style={{ right: '0px', top: '0px', position: 'absolute', backgroundImage: "url(" + flashIcon + ")" }}></div>
                    <div className="summoner" style={{ left: '0px', bottom: '0px', position: 'absolute', backgroundImage: "url(" + sorceryIcon + ")" }}></div>
                    <div className="summoner" style={{ right: '0px', bottom: '0px', position: 'absolute', backgroundImage: "url(" + teleportIcon + ")" }}></div>
                </div>
                <div className={lpChangeStyle()}>{(props.matchData.lpChange > 0 ? '+' : '')}{props.matchData.lpChange} LP</div>
            </div>
            <div className="kda-container card-data-container">
                <div className="kills-container">{props.matchData.kills} / {props.matchData.deaths} / {props.matchData.assists}</div>
                <div className="kda-count-contianer">33 KDA</div>
            </div>
            <div className="cs-gold-container card-data-container">
                <div className="cs-container">{props.matchData.csCount} (9.8) CS</div>
                <div className="gold-container"><i class="fas fa-coins"></i>{props.matchData.goldCount}</div>
            </div>
            <div className="items-container card-data-container">
                <div className="items-icon-wrapper">
                    <div className="item-icon" style={{ backgroundImage: "url(" + nightharvesterIcon + ")" }}></div>
                    <div className="item-icon" style={{ backgroundImage: "url(" + voidstaffIcon + ")" }}></div>
                    <div className="item-icon" style={{ backgroundImage: "url(" + rabcapIcon + ")" }}></div>
                    <div className="item-icon" style={{ backgroundImage: "url(" + trinketIcon + ")" }}></div>
                    <div className="item-icon" style={{ backgroundImage: "url(" + demonicIcon + ")" }}></div>
                    <div className="item-icon" style={{ backgroundImage: "url(" + morelleoIcon + ")" }}></div>
                    <div className="item-icon" style={{ backgroundImage: "url(" + treadsIcon + ")" }}></div>
                    <div className="item-icon" style={{ backgroundImage: "url(" + controlwardIcon + ")" }}></div>
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