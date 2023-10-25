import { SessionDTO } from '../dtos/SessionDTO';
import { SESSION_STORAGE } from './storageConfig';

export async function storageSessionSave(Session: SessionDTO) {
  // eslint-disable-next-line no-useless-catch
  try {
    await localStorage.setItem(SESSION_STORAGE, JSON.stringify(Session));
  } catch (error) {
    throw error;
  }
}

export async function storageSessionGet() {
  // eslint-disable-next-line no-useless-catch
  try {
    const storage = await localStorage.getItem(SESSION_STORAGE);

    const session: SessionDTO = storage
      ? JSON.parse(storage)
      : ({} as SessionDTO);

    return session;
  } catch (error) {
    throw error;
  }
}

export async function storageSessionRemove() {
  // eslint-disable-next-line no-useless-catch
  try {
    await localStorage.removeItem(SESSION_STORAGE);
  } catch (error) {
    throw error;
  }
}
