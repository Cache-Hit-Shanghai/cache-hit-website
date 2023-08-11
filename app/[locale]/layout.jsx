import { Grommet, grommet } from 'grommet';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import StyledComponentsRegistry from '../../components/registry';


export const metadata = {
  title: '上海缓存命中科技有限公司',
  description: '上海缓存命中科技有限公司官网',
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'cn'}];
}

export default async function RootLayout({ children, params: {locale} }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StyledComponentsRegistry>
            <Grommet full theme={grommet} themeMode='dark'>
              {children}
            </Grommet>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}