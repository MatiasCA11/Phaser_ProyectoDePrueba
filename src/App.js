import React, { useEffect, useState } from "react";
import Phaser from "phaser";
import Scene from './components/Escena';

export default function App() {

    const [listo, setListo] = useState(false);

    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 250 }
                }
            },
            scene: [Scene]
        };
        const game = new Phaser.Game(config);

        game.events.on("LISTO", setListo)

        return () => {
            setListo(false);
            game.destroy(true);
        }
    }, [listo]);
}