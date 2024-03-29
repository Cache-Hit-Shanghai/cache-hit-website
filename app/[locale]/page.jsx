'use client';

import { Box, Heading, Text, Image, Stack, Diagram, Card, CardHeader, CardBody, Grid, Anchor } from 'grommet';
import Link from 'next/link';
import { Cloud, Webcam, Checkmark } from 'grommet-icons';
import {useTranslations} from 'next-intl';


export default function Page({ params: { locale } }) {
  const t = useTranslations('Index');
  return (
    <Box align='center'>
      <Box wrap width='xxlarge' pad='large' direction='row' justify='between' background='background-front'>
        <Box justify='center' style={{ flex: '1 1 0' }} width={{ min: 'small' }}>
          <Box gap='medium'>
            <Heading margin='none' size='large' color='neutral-1'>{t('title')}</Heading>
            <Heading margin='none' color='neutral-1'>{t('subtitle')}</Heading>
            <Heading margin='none' level={2} color='accent-4'>{t('wish')}</Heading>
            <Text margin={{ vertical: 'large' }}>{t('description')}</Text>
          </Box>
        </Box>
        <Box align='center' justify='center' style={{ flex: '1 1 0' }} width={{ min: 'small' }}>
          <Box pad='small'>
            <Image fit='contain' src='https://jujiu-prod.oss-accelerate.aliyuncs.com/internetofthings.svg' />
          </Box>
        </Box>
      </Box>
      <Box width='xxlarge' pad='large' gap='large' background='dark-6'>
        <Heading level={2}>{t('partners')}</Heading>
        <Box wrap direction='row' align='center' justify='evenly' background='white'>
          <Box width='medium'>
            <Image src='https://jujiu-prod.oss-accelerate.aliyuncs.com/guangfang_logo.png' />
          </Box>
          <Box width='medium' margin='large'>
            <Link href='https://daxiaogroup.com' passHref legacyBehavior>
              <Box as='a' target='_blank' focusIndicator={false}>
                <Image src='https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/logo.svg' />
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box width='xxlarge' pad='large' background='background-contrast'>
        <Heading level={1}>Web网络摄像机解决方案</Heading>
        <Box wrap direction='row' align='center'>
          <Box flex={{ grow: 1, shrink: 1 }}>
            <Stack guidingChild={1}>
              <Diagram
                animation={{ type: 'draw', duration: 3000 }}
                connections={[
                  {
                    fromTarget: '1',
                    toTarget: '2',
                    thickness: 'xsmall',
                    color: 'accent-4',
                  },
                  {
                    fromTarget: '1',
                    toTarget: '3',
                    thickness: 'xsmall',
                    color: 'accent-4',
                  },
                  {
                    fromTarget: '1',
                    toTarget: '4',
                    thickness: 'xsmall',
                    color: 'accent-4',
                  },
                ]}
              />
              <Box gap='large'>
                <Box align='center'>
                  <Cloud margin='large' size='xlarge' color='graph-3' id='1' />
                </Box>
                <Box justify='center' direction='row' gap='large'>
                  <Webcam size='large' id='2' />
                  <Webcam size='large' id='3' />
                  <Webcam size='large' id='4' />
                </Box>
              </Box>
            </Stack>
          </Box>
          <Box width='large' margin='large'>
            <Heading level={2}>创新的Web AIoT音视频平台</Heading>
            <Text>雎鸠云音视频PaaS平台是一个创新的基于Web的AIoT音视频平台。平台以WebRTC流媒体协议为基础，全面支持纯H5的无插件高安全的网页音视频。帮助客户快速落地安全、领先的AIoT产品。</Text>
          </Box>
        </Box>
        <Box>
          <Heading level={2} alignSelf='center'>核心技术优势</Heading>
          <Box wrap direction='row' justify='between'>
            <Card background='background-front' margin={{ vertical: 'small' }} width='medium'>
              <CardHeader background='active' pad='small'>
                <Box direction='row' align='center' gap='small'>
                  <Box round background='brand'><Checkmark /></Box>
                  <Heading level={4} margin='none'>超高安全性</Heading>
                </Box>
              </CardHeader>
              <CardBody pad='small'>
                <Text>端到端全流量加密。音视频流和数据流都采用TLS/DTLS的方式加密。取消了传统网络摄像机中容易被攻击的的端口监听和弱密码。信令层采用服务端RSA签名进行鉴权，在信道加密的基础上提供了安全双保险。</Text>
              </CardBody>
            </Card>
            <Card background='background-front' margin={{ vertical: 'small' }} width='medium'>
              <CardHeader background='active' pad='small'>
                <Box direction='row' align='center' gap='small'>
                  <Box round background='brand'><Checkmark /></Box>
                  <Heading level={4} margin='none'>P2P传输</Heading>
                </Box>
              </CardHeader>
              <CardBody pad='small'>
                <Text>H5播放器页面与设备端直连。降低了流媒体和双向语音的延迟，提高了用户体验。在少数无法P2P对穿成功的场景下，可以自动无缝切换到转发模式。</Text>
              </CardBody>
            </Card>
            <Card background='background-front' margin={{ vertical: 'small' }} width='medium'>
              <CardHeader background='active' pad='small'>
                <Box direction='row' align='center' gap='small'>
                  <Box round background='brand'><Checkmark /></Box>
                  <Heading level={4} margin='none'>全互联网化</Heading>
                </Box>
              </CardHeader>
              <CardBody pad='small'>
                <Text>全H5方案，客户端/手机app/小程序均为H5网页。正真做到了一次部署，到处运行。页面全部采用HTTPS，充分保障平台和产品安全。可轻易与智慧交通、智慧楼宇、智慧农业、智能家居等其它基于Web的SaaS产品对接。</Text>
              </CardBody>
            </Card>
          </Box>
        </Box>
      </Box>
      <Box width='xxlarge' pad='large' background='linear-gradient(to bottom right, #00873D, #00739D)'>
        <Heading level={1}>雎鸠云Web AIoT PaaS平台</Heading>
        <Box>
        <Heading level={2} alignSelf='center'>端边云一体的AIoT架构</Heading>
          <Grid
            border={['right', 'bottom']}
            rows={['auto', 'auto', 'auto', 'auto', 'auto', 'auto']}
            columns={['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto']}
            areas={[
              { name: 'paas_title', start: [0, 2], end: [0, 5] },
              { name: 'web_paas', start: [1, 2], end: [2, 5] },
              { name: 'ai_paas', start: [3, 2], end: [3, 5] },
              { name: 'iot_paas', start: [4, 2], end: [5, 5] },
              { name: 'fw_paas', start: [6, 2], end: [6, 5] },
              { name: 'hw_paas', start: [7, 2], end: [7, 5] },
            ]}
          >
            <Box pad='xxsmall' align='center' border={['top', 'left']} background='status-critical'><Text weight='bold'>场景</Text></Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-critical'>智慧交通</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-critical'>智慧楼宇</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-critical'>智慧家居</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-critical'>智慧城市</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-critical'>智慧零售</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-critical'>智慧校园</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-critical'>智慧办公</Box>
            <Box pad='xxsmall' align='center' border={['top', 'left']} background='status-warning'><Text weight='bold'>SaaS</Text></Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-warning'>视频监控平台</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-warning'>位置信息平台</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-warning'>智能家居平台</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-warning'>智慧照明平台</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-warning'>可穿戴平台</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-warning'>智能网络平台</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-warning'>数字公路平台</Box>
            <Box pad='xxsmall' align='center' justify='center' gridArea='paas_title' border={['top', 'left']} background='light-3'><Text weight='bold'>PaaS</Text></Box>
            <Grid
              gridArea='web_paas'
              rows={['auto', 'auto', 'auto', 'auto']}
              columns={['auto', 'auto']}
              areas={[{ name:'web_paas_title', start: [0, 0], end: [1, 0] }]}
            >
              <Box pad='xxsmall' align='center' gridArea='web_paas_title' border={['top', 'left']} background='light-4'>Web PaaS</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='light-4'>登录</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='light-4'>音视频</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='light-4'>支付</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='light-4'>Billing</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='light-4'>数据分析</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='light-4'>消息分发</Box>
            </Grid>
            <Grid
              gridArea='ai_paas'
              rows={['auto', 'auto', 'auto', 'auto']}
              columns={['auto']}
            >
              <Box pad='xxsmall' align='center' border={['top', 'left']} background='dark-4'>AI PaaS</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-4'>人脸识别</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-4'>手势识别</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-4'>车牌识别</Box>
            </Grid>
            <Grid
              gridArea='iot_paas'
              rows={['auto', 'auto', 'auto', 'auto']}
              columns={['auto', 'auto']}
              areas={[{ name:'iot_paas_title', start: [0, 0], end: [1, 0] }]}
            >
              <Box pad='xxsmall' align='center' gridArea='iot_paas_title' border={['top', 'left']} background='dark-3'>IoT Core</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-3'>MQTT</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-3'>设备管理</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-3'>时序数据库</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-3'>远程诊断</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-3'>位置与传感</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-3'>OTA</Box>
            </Grid>
            <Grid
              gridArea='fw_paas'
              rows={['auto', 'auto', 'auto', 'auto']}
              columns={['auto']}
            >
              <Box pad='xxsmall' align='center' border={['top', 'left']} background='dark-2'>固件</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-2'>SDK</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-2'>GUI</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-2'>多语言运行时</Box>
            </Grid>
            <Grid
              gridArea='hw_paas'
              rows={['auto', 'auto', 'auto', 'auto']}
              columns={['auto']}
            >
              <Box pad='xxsmall' align='center' border={['top', 'left']} background='dark-1'>硬件</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-1'>核心板</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-1'>通讯模组</Box>
              <Box pad='xxsmall' border={['top', 'left']} background='dark-1'>视觉模组</Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Heading level={2} alignSelf='center'>平台技术优势</Heading>
          <Box wrap direction='row' justify='between'>
            <Card background='background-front' margin={{ vertical: 'small' }} width='medium'>
              <CardHeader background='active' pad='small'>
                <Box direction='row' align='center' gap='small'>
                  <Box round background='brand'><Checkmark /></Box>
                  <Heading level={4} margin='none'>创新的AIoT中台</Heading>
                </Box>
              </CardHeader>
              <CardBody pad='small'>
                <Text>创新的设备管理机制，采用强加密的令牌作为设备鉴权的方式。取代了繁琐的“一机一密”和“设备证书”。中台API可直接运行在用户SaaS的H5页面中，不再需要SaaS后端进行转发。</Text>
              </CardBody>
            </Card>
            <Card background='background-front' margin={{ vertical: 'small' }} width='medium'>
              <CardHeader background='active' pad='small'>
                <Box direction='row' align='center' gap='small'>
                  <Box round background='brand'><Checkmark /></Box>
                  <Heading level={4} margin='none'>安全且高可用</Heading>
                </Box>
              </CardHeader>
              <CardBody pad='small'>
                <Text>所有流量都使用TLS/DTLS加密。使用强加密用户令牌鉴权，使得API可以直接运行在用户SaaS的前端网页里。弹性资源扩展，轻松支持海量设备连接，服务可用性高达99.9%。</Text>
              </CardBody>
            </Card>
            <Card background='background-front' margin={{ vertical: 'small' }} width='medium'>
              <CardHeader background='active' pad='small'>
                <Box direction='row' align='center' gap='small'>
                  <Box round background='brand'><Checkmark /></Box>
                  <Heading level={4} margin='none'>支持私有部署和定制开发</Heading>
                </Box>
              </CardHeader>
              <CardBody pad='small'>
                <Text>独特的插件化架构设计，轻松支持定制开发，满足不同种类客户的需要。支持公有云、私有云和混合云部署，支持无缝部署，部署时系统能够正常使用。</Text>
              </CardBody>
            </Card>
          </Box>
        </Box>
      </Box>
      <Box wrap width='xxlarge' pad='medium' background='background-front' direction='row' align='center' gap='medium'>
        <Text size='small' color='text-weak'>&copy;2020-2023 {t('copyright')}</Text>
        {locale === 'cn' && <Link href='https://beian.miit.gov.cn/' passHref legacyBehavior>
          <Anchor size='small' label='沪ICP备2020027200号-3' target='_blank' />
        </Link>}
      </Box>
    </Box>
  );
}