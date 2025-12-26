import { Project, TechNode } from '../data/ProjectData';
import { LogItem } from '../hooks/useStore';

export interface DatabaseService {
    // Projects
    getProjects(): Promise<Project[]>;
    getTechStack(): Promise<TechNode[]>;

    // Logs (DevLog)
    getSystemLogs(): Promise<LogItem[]>;
    addSystemLog(log: LogItem): Promise<void>;

    // User Presence (Ghost)
    updatePresence(userId: string, position: [number, number, number], scene: string): Promise<void>;
    getActiveUsers(scene: string): Promise<any[]>;
}
