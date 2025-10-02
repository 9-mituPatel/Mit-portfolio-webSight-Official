import { useState, useEffect } from 'react';
import { Search, File, FileText, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';

const FileSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [files, setFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initFileList = async () => {
      try {
        const projectFiles = [
          // Components
          { name: 'About.jsx', path: '/src/components/About.jsx', type: 'component' },
          { name: 'Contact.jsx', path: '/src/components/Contact.jsx', type: 'component' },
          { name: 'Education.jsx', path: '/src/components/Education.jsx', type: 'component' },
          { name: 'Experience.jsx', path: '/src/components/Experience.jsx', type: 'component' },
          { name: 'Footer.jsx', path: '/src/components/Footer.jsx', type: 'component' },
          { name: 'Header.jsx', path: '/src/components/Header.jsx', type: 'component' },
          { name: 'Hero.jsx', path: '/src/components/Hero.jsx', type: 'component' },
          { name: 'KeyboardNavigation.jsx', path: '/src/components/KeyboardNavigation.jsx', type: 'component' },
          { name: 'Projects.jsx', path: '/src/components/Projects.jsx', type: 'component' },
          { name: 'SimpleScrollButton.jsx', path: '/src/components/SimpleScrollButton.jsx', type: 'component' },
          { name: 'Skills.jsx', path: '/src/components/Skills.jsx', type: 'component' },
          { name: 'FileSearch.jsx', path: '/src/components/FileSearch.jsx', type: 'component' },

          // UI Components
          { name: 'button.jsx', path: '/src/components/ui/button.jsx', type: 'ui' },
          { name: 'card.jsx', path: '/src/components/ui/card.jsx', type: 'ui' },
          { name: 'dialog.jsx', path: '/src/components/ui/dialog.jsx', type: 'ui' },
          { name: 'input.jsx', path: '/src/components/ui/input.jsx', type: 'ui' },

          // Core Files
          { name: 'App.jsx', path: '/src/App.jsx', type: 'core' },
          { name: 'index.jsx', path: '/src/index.jsx', type: 'core' },
          { name: 'utils.ts', path: '/src/lib/utils.ts', type: 'util' },
        ];
        
        setFiles(projectFiles);
        setFilteredFiles(projectFiles);
        setError(null);
      } catch (err) {
        setError('Error loading files. Please try again.');
        console.error('File loading error:', err);
      }
    };
    
    initFileList();
  }, []);

  const handleSearch = (value) => {
    setSearchQuery(value);
    if (!value.trim()) {
      setFilteredFiles(files);
      return;
    }
    const filtered = files.filter(file => 
      file.name.toLowerCase().includes(value.toLowerCase()) ||
      file.path.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFiles(filtered);
  };

  const getFileIcon = (type) => {
    switch(type) {
      case 'component':
        return <FileText className="w-4 h-4 text-blue-500" />;
      case 'ui':
        return <File className="w-4 h-4 text-purple-500" />;
      case 'core':
        return <File className="w-4 h-4 text-green-500" />;
      case 'util':
        return <File className="w-4 h-4 text-yellow-500" />;
      default:
        return <Folder className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border border-border/50"
        >
          <Search className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search Files
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="p-4">
            <Input
              type="text"
              placeholder="Search for files..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full"
              autoFocus
            />
          </div>
          <div className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-classic">
            <AnimatePresence mode="wait">
              {error ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="text-center text-destructive py-8"
                >
                  {error}
                </motion.div>
              ) : filteredFiles.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="text-center text-muted-foreground py-8"
                >
                  No files found
                </motion.div>
              ) : (
                <motion.div
                  className="grid gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {filteredFiles.map((file, index) => (
                    <motion.div
                      key={file.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.05 }
                      }}
                      exit={{ opacity: 0, y: 20 }}
                    >
                      <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200">
                        <div className="p-4 flex items-center gap-3">
                          {getFileIcon(file.type)}
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{file.name}</p>
                            <p className="text-sm text-muted-foreground truncate">
                              {file.path}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FileSearch;