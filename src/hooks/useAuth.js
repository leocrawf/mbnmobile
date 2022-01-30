import {useMutation} from 'react-query';
import {register} from '../services/auth';
import {AUTH_KEY} from './queryKeys';

export const useAuth = (email, password, cino, options = {}) => {
  const {isLoading, mutate} = useMutation(register, {
    onSuccess: () => {
      console.log('I am registered');
    },
  });

  mutate(email, password, cino);
};
