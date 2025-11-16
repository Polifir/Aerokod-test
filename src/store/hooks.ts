import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './sotre';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();