import { useStore } from '../../hooks/useStore';
import { LORE } from '../../data/lore';
import { motion } from 'framer-motion';
import useSoundFX from '../../hooks/useSoundFX';

const NavigationDock = () => {
    const setScene = useStore(state => state.setScene);
    const setHoveredPlanet = useStore(state => state.setHoveredPlanet);
    const playHover = useSoundFX().playHover;
    const playClick = useSoundFX().playClick;

    // Define items based on Lore
    const dockItems = [
        { id: 'profile', label: 'IDENTITY', icon: '✦', color: LORE.SECTORS.PROFILE.visual.color, target: 'profile' },
        { id: 'lab01', label: 'PRISM', icon: '◈', color: LORE.SECTORS.LAB_01.visual.color, target: 'lab01' },
        { id: 'lab02', label: 'TERRARIUM', icon: '☘', color: LORE.SECTORS.LAB_02.visual.color, target: 'lab02' },
        { id: 'lab03', label: 'RESONANCE', icon: '♬', color: LORE.SECTORS.LAB_03.visual.color, target: 'lab03' },
        { id: 'lab04', label: 'GLITCH', icon: '⚡', color: LORE.SECTORS.LAB_04.visual.color, target: 'lab04' },
    ];

    const handleHover = (id) => {
        setHoveredPlanet(id);
        playHover();
    };

    const handleLeave = () => {
        setHoveredPlanet(null);
    };

    const handleClick = (item) => {
        playClick();
        if (item.target === 'profile') {
            setScene('profile');
        } else {
            // For warping, we need a position. 
            // Since we can't easily get the Vector3 from here without ref access,
            // we will let the WarpController or SolarSystem handle the warp via store if possible,
            // OR we just use setScene('name') and let the scene load normally if not warping.
            // BUT, the goal is "Click initiates warp".
            // Since `startWarp` needs a position to look at, and we don't have it here...
            // Let's rely on simple scene switching for the Dock for now, 
            // OR implement a "Find Planet" mechanism in SolarSystem that detects this store change.
            //
            // BETTER UX: The dock mimics the "Selection". 
            // If we just switch scene, it fades out. That's actually fine and faster.
            // Let's stick to setScene for immediate navigation, treating it as "Fast Travel".
            setScene(item.target);
        }
    };

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
            <div className="flex items-end gap-2 px-4 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
                {dockItems.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onHover={handleHover}
                        onLeave={handleLeave}
                        onClick={handleClick}
                    />
                ))}
            </div>
        </div>
    );
};

const Item = ({ item, onHover, onLeave, onClick }) => {
    return (
        <motion.button
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onClick(item)}
            onMouseEnter={() => onHover(item.id)}
            onMouseLeave={onLeave}
            className="group relative flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
            style={{
                boxShadow: `0 0 0px ${item.color}00` // Initial shadow
            }}
        >
            {/* Active Glow on Hover via CSS/Style */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: `0 0 15px ${item.color}40`, border: `1px solid ${item.color}80` }}
            />

            <span className="text-xl md:text-2xl filter drop-shadow-md pb-1" style={{ color: item.color }}>
                {item.icon}
            </span>

            {/* Label Tooltip */}
            <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                <div className="px-2 py-1 text-[10px] md:text-xs font-mono font-bold bg-black/80 backdrop-blur border border-white/20 rounded text-white tracking-widest whitespace-nowrap">
                    {item.label}
                </div>
            </div>
        </motion.button>
    );
};

export default NavigationDock;
