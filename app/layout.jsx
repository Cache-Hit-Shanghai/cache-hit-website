import { Grommet, grommet } from 'grommet';
import StyledComponentsRegistry from '../components/registry';


export const metadata = {
  title: '上海缓存命中科技有限公司',
  description: '上海缓存命中科技有限公司官网',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Grommet full theme={grommet} themeMode='dark'>
            {children}
          </Grommet>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}