import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Dog1',
        img: 'img/dog1.jpeg',
        clicked: false
    },
    {
        name: 'Dog2',
        img: 'img/dog3.jpeg',
        clicked: false
    },
    {
        name: 'Dog3',
        img: 'img/dog5.jpg',
        clicked: false
    },
    {
        name: 'Dog4',
        img: 'img/dog6.jpeg',
        clicked: false
    },
    {
        name: 'Dog5',
        img: 'img/dog8.jpeg',
        clicked: false
    },
    {
        name: 'Dog6',
        img: 'img/dog9.jpg',
        clicked: false
    },
    {
        name: 'Dog7',
        img: 'img/dog7.png',
        clicked: false
    },
    {
        name: 'Dog8',
        img: 'img/dog8.png',
        clicked: false
    },
    {
        name: 'Dog9',
        img: 'img/dog9.png',
        clicked: false
    },
    {
        name: 'Dog10',
        img: 'img/dog14.png',
        clicked: false
    },
    {
        name: 'Dog11',
        img: 'img/dog10.jpg',
        clicked: false
    },
    {
        name: 'Dog12',
        img: 'img/dog12.png',
        clicked: false
    },
    {
        name: 'Dog13',
        img: 'img/dog13.jpg',
        clicked: false
    },
    {
        name: 'Dog14',
        img: 'img/dog14.jpeg',
        clicked: false
    },
    {
        name: 'dog15',
        img: 'img/dog.jpeg',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        };
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
                
            </div>
        )
    }
}