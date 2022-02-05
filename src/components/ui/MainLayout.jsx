 
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';  

export const MainLayout = () => {  
  
  return (
    <motion.main layout> 
      <Outlet />
    </motion.main>
  );
};
