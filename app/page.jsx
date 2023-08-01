'use client';

import { Box, Heading, Text, Image, Stack, Diagram, Card, CardHeader, CardBody, Grid } from 'grommet';
import { Cloud, Webcam, Checkmark } from 'grommet-icons';

export default function Page() {
  return (
    <Box align='center'>
      <Box width='xxlarge' height='large' direction='row' background='background-front'>
        <Box margin='large' gap='xlarge' justify='center'>
          <Box gap='medium'>
            <Heading margin='none' size='large' color='neutral-1'>雎鸠云</Heading>
            <Heading margin='none' color='neutral-1'>AIoT PaaS平台</Heading>
            <Heading margin='none' level={2} color='accent-4'>构建万物自治的世界！</Heading>
          </Box>
          <Text>领先的纯H5 AIoT PaaS平台与端云一体的行业解决方案。将AIoT产品落地事件缩短至1个月，开发成本缩短至原来的十分之一。全网页控制端，原生支持几乎所有的操作系统。基于零信任网络打造，全栈加密，充分保障系统安全。</Text>
        </Box>
        <Image margin='xlarge' background='white' src='https://jujiu-prod.oss-accelerate.aliyuncs.com/internetofthings.svg' />
      </Box>
      <Box width='xxlarge' pad='large' gap='large' background='dark-6'>
        <Heading level={2}>合作伙伴</Heading>
        <Box round direction='row' align='center' justify='evenly' background='white'>
          <Box  width='medium'>
            <Image src='https://jujiu-prod.oss-accelerate.aliyuncs.com/guangfang_logo.png' />
          </Box>
          <Box  width='medium'>
            <Image src='https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/logo.svg' />
          </Box>
        </Box>
      </Box>
      <Box width='xxlarge' pad='large' background='background-contrast'>
        <Heading level={2}>Web网络摄像机解决方案</Heading>
        <Box direction='row' align='center'>
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
          <Box width='50%' margin='large' flex='false'>
            <Heading level={2}>创新的Web AIoT音视频平台</Heading>
            <Text>雎鸠云音视频PaaS平台是一个创新的基于Web的AIoT音视频平台。平台以WebRTC流媒体协议为基础，全面支持纯H5的无插件高安全的网页音视频。帮助客户快速落地安全、领先的AIoT产品。</Text>
          </Box>
        </Box>
        <Box>
          <Heading level={3} alignSelf='center'>核心技术优势</Heading>
          <Box direction='row' justify='between'>
            <Card background='background-front' width='medium'>
              <CardHeader background='active' pad='small'>
                <Box direction='row' align='center' gap='small'>
                  <Box round background='brand'><Checkmark /></Box>
                  <Heading level={4} margin='none'>超高安全性</Heading>
                </Box>
              </CardHeader>
              <CardBody pad='small'>
                <Text>端到端全流量加密。音视频流和数据流都采用TLS/DTLS的方式加密。取消了传统网络摄像机中容易被攻击的的端口监听和弱密码。信令层采用服务端RSA签名进行鉴权。设备端采用服务器签发的令牌鉴权，取代了麻烦的“一机一密”。</Text>
              </CardBody>
            </Card>
            <Card background='background-front' width='medium'>
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
            <Card background='background-front' width='medium'>
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
        <Heading level={2}>雎鸠云Web AIoT PaaS平台</Heading>
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
          <Box pad='xxsmall' align='center' justify='center' gridArea='paas_title' border={['top', 'left']} background='dark-2'><Text weight='bold'>PaaS</Text></Box>
          <Grid
            gridArea='web_paas'
            rows={['auto', 'auto', 'auto', 'auto']}
            columns={['auto', 'auto']}
            areas={[{ name:'web_paas_title', start: [0, 0], end: [1, 0] }]}
          >
            <Box pad='xxsmall' align='center' gridArea='web_paas_title' border={['top', 'left']} background='status-unknown'>Web PaaS</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-unknown'>登录</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-unknown'>音视频</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-unknown'>支付</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-unknown'>Billing</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-unknown'>数据分析</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-unknown'>消息分发</Box>
          </Grid>
          <Grid
            gridArea='ai_paas'
            rows={['auto', 'auto', 'auto', 'auto']}
            columns={['auto']}
          >
            <Box pad='xxsmall' align='center' border={['top', 'left']} background='status-ok'>AI PaaS</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-ok'>人脸识别</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-ok'>手势识别</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='status-ok'>车牌识别</Box>
          </Grid>
          <Grid
            gridArea='iot_paas'
            rows={['auto', 'auto', 'auto', 'auto']}
            columns={['auto', 'auto']}
            areas={[{ name:'iot_paas_title', start: [0, 0], end: [1, 0] }]}
          >
            <Box pad='xxsmall' align='center' gridArea='iot_paas_title' border={['top', 'left']} background='brand'>IoT Core</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='brand'>MQTT</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='brand'>设备管理</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='brand'>时序数据库</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='brand'>远程诊断</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='brand'>位置与传感</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='brand'>OTA</Box>
          </Grid>
          <Grid
            gridArea='fw_paas'
            rows={['auto', 'auto', 'auto', 'auto']}
            columns={['auto']}
          >
            <Box pad='xxsmall' align='center' border={['top', 'left']} background='graph-4'>固件</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='graph-4'>SDK</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='graph-4'>GUI</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='graph-4'>多语言运行时</Box>
          </Grid>
          <Grid
            gridArea='hw_paas'
            rows={['auto', 'auto', 'auto', 'auto']}
            columns={['auto']}
          >
            <Box pad='xxsmall' align='center' border={['top', 'left']} background='accent-2'>硬件</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='accent-2'>核心板</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='accent-2'>通讯模组</Box>
            <Box pad='xxsmall' border={['top', 'left']} background='accent-2'>视觉模组</Box>
          </Grid>
        </Grid>
      </Box>
      <Box width='xxlarge' pad={{ vertical: 'small', horizontal: 'large'}} background='background-front' direction='row' gap='medium'>
        <Text size='small' color='text-weak'>&copy;2020-2023 上海缓存命中科技有限公司 版权所有</Text>
        <Text size='small' color='text-weak'>沪ICP备2020027200号-3</Text>
      </Box>
    </Box>
  );
}