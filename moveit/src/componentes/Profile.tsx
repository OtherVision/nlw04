import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/OtherVision.png" alt="Minha Foto Perfil"/>
            <div>
                <strong>Jardelino Medeiros</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    level { level }
                </p>
            </div>
        </div>

    );
}