import { ThemeProvider } from '../../src/providers/theme/layout';
import '../../src/providers/theme/theme.css';

type Props = {
  children: React.ReactNode;
};

export default function Themed({ children }: Props) {
  return (
    <div style={{ display: 'flex', minWidth: '100px', minHeight: '100px' }}>
      <ThemeProvider>{children}</ThemeProvider>
    </div>
  );
}
