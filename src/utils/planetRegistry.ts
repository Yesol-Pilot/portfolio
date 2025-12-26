/**
 * Planet Registry
 * 행성 위치를 실시간으로 공유하기 위한 간단한 레지스트리
 * SolarSystem에서 등록하고, WarpController에서 조회합니다.
 */
import * as THREE from 'three';

// 행성 ref 저장소
const planetRefs: Record<string, React.MutableRefObject<THREE.Object3D | null>> = {};

/**
 * 행성 ref 등록 (SolarSystem에서 호출)
 */
export const registerPlanet = (targetId: string, ref: React.MutableRefObject<THREE.Object3D | null>) => {
    planetRefs[targetId] = ref;
};

/**
 * 행성 ref 해제 (컴포넌트 언마운트 시)
 */
export const unregisterPlanet = (targetId: string) => {
    delete planetRefs[targetId];
};

/**
 * 행성의 현재 월드 위치 조회 (WarpController에서 호출)
 * @returns {THREE.Vector3 | null}
 */
export const getPlanetWorldPosition = (targetId: string, outVector: THREE.Vector3): THREE.Vector3 | null => {
    const ref = planetRefs[targetId];
    if (ref && ref.current) {
        ref.current.getWorldPosition(outVector);
        return outVector;
    }
    return null;
};

export default planetRefs;
