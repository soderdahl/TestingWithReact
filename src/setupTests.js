import Ensyme from 'ensyme';
import EnsymeAdapter from 'ensyme';

Ensyme.configure({
    adapter: new EnzymeAdapter(),
   disableLifecycleMethods: true, 
})