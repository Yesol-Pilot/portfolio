import { useStore } from '../../hooks/useStore';

// Scenes
import BootScene from '../../scenes/system/BootScene';
import HubScene from '../../scenes/main/HubScene';
import ProfileScene from '../../scenes/main/ProfileScene';
import Lab01Scene from '../../scenes/labs/Lab01Scene';
import Lab02Scene from '../../scenes/labs/Lab02Scene';
import Lab03Scene from '../../scenes/labs/Lab03Scene';
import Lab04Scene from '../../scenes/labs/Lab04Scene';
import ContactScene from '../../scenes/main/ContactScene';

const SceneManager = () => {
    const activeScene = useStore((state) => state.currentScene);

    return (
        <group>
            {activeScene === 'boot' && <BootScene />}
            {activeScene === 'hub' && <HubScene />}
            {activeScene === 'profile' && <ProfileScene />}
            {activeScene === 'lab01' && <Lab01Scene />}
            {activeScene === 'contact' && <ContactScene />}

            {activeScene === 'lab02' && <Lab02Scene />}
            {activeScene === 'lab03' && <Lab03Scene />}
            {activeScene === 'lab04' && <Lab04Scene />}
        </group>
    );
};

export default SceneManager;
