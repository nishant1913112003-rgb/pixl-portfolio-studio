import { motion } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function ProfileHeader() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-4 right-4 z-50 flex items-center gap-3"
    >
      <ThemeToggle />
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-primary p-0.5">
          <Avatar className="w-full h-full">
            <AvatarImage 
              src="/lovable-uploads/profile-photo.jpg" 
              alt="Profile" 
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-primary text-white font-bold text-sm">
              NV
            </AvatarFallback>
          </Avatar>
        </div>
        
        {/* Online status indicator */}
        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-success rounded-full border-2 border-background animate-pulse" />
      </motion.div>
    </motion.div>
  )
}