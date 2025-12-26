import { DatabaseService } from './db';
import { Project, TechNode, projects, techStackNodes } from '../data/ProjectData'; // Fallback initial data
import { LogItem } from '../hooks/useStore';

// TODO: Install firebase SDK: npm install firebase
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: process.env.VITE_FIREBASE_API_KEY,
//     authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.VITE_FIREBASE_PROJECT_ID,
//     // ...
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export class FirebaseService implements DatabaseService {
    async getProjects(): Promise<Project[]> {
        console.warn("Firebase not fully configured. Returning static data.");
        // const snapshot = await getDocs(collection(db, 'projects'));
        // return snapshot.docs.map(doc => doc.data() as Project);
        return projects;
    }

    async getTechStack(): Promise<TechNode[]> {
        return techStackNodes;
    }

    async getSystemLogs(): Promise<LogItem[]> {
        return [];
    }

    async addSystemLog(log: LogItem): Promise<void> {
        console.log("Firebase Log:", log);
    }

    async updatePresence(userId: string, position: [number, number, number], scene: string): Promise<void> {
        // Realtime DB logic here
    }

    async getActiveUsers(scene: string): Promise<any[]> {
        return [];
    }
}
