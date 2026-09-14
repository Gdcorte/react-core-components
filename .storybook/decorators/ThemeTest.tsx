import { ThemeProvider } from '../../src/providers/theme/layout';
import '../../src/providers/theme/theme.css';

type Props = {
  children: React.ReactNode;
};

export default function ThemeTest({ children }: Props) {
  return (
    <div style={{ display: 'flex', width: '100px', height: '100px' }}>
      <ThemeProvider>{children}</ThemeProvider>
    </div>
  );
}
