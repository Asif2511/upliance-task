import { Box } from '@mui/material';
import Counter from './Counter';
import UserForm from './UserForm';
import RichTextEditor from './RichTextEditor';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center">My App</h1>
      </header>
      <Box className="mb-6">
        <div className="flex flex-col md:flex-row justify-around items-center gap-4">
          <div className="w-full md:w-1/3">
            <Counter />
          </div>
          <div className="w-full md:w-1/3">
            <RichTextEditor />
          </div>
        </div>
      </Box>
      <Box>
        <UserForm />
      </Box>
    </div>
  );
}

export default App;
