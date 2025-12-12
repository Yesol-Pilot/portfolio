import { useStore } from '../hooks/useStore';

// Scenes
import BootScene from '../scenes/BootScene';
import HubScene from '../scenes/HubScene';
import ProfileScene from '../scenes/ProfileScene';
import Lab01Scene from '../scenes/Lab01Scene';
import Lab02Scene from '../scenes/Lab02Scene';
import Lab03Scene from '../scenes/Lab03Scene';
import Lab04Scene from '../scenes/Lab04Scene';
import ContactScene from '../scenes/ContactScene';

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
