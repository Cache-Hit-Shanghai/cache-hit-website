'use client';

import { Box, Heading, Text, Image } from 'grommet';

export default function Page() {
  return (
    <Box align='center'>
      <Box width='xxlarge' height='large' direction='row' background='background-front'>
        <Box margin='large' gap='xlarge' justify='center'>
          <Box gap='medium'>
            <Heading margin='none' size='large' color='neutral-1'>雎鸠云</Heading>
            <Heading margin='none' color='neutral-1'>AIoT PaaS平台</Heading>
            <Heading margin='none' level={2} color='accent-4'>为万物自治而努力！</Heading>
          </Box>
          <Text>领先的纯H5 AIoT PaaS平台与端云一体的行业解决方案。将AIoT产品落地事件缩短至1个月，开发成本缩短至原来的十分之一。全网页控制端，原生支持几乎所有的操作系统。基于零信任网络打造，全栈加密，充分保障系统安全。</Text>
        </Box>
        <Image margin='xlarge' background='white' src='https://jujiu-prod.oss-accelerate.aliyuncs.com/internetofthings.svg' />
      </Box>
      <Box width='xxlarge' pad='large' gap='large' background='background-contrast'>
        <Heading level={3}>合作伙伴</Heading>
        <Box round direction='row' align='center' justify='evenly' background='white'>
          <Box  width='medium'>
            <Image src='https://jujiu-prod.oss-accelerate.aliyuncs.com/guangfang_logo.png' />
          </Box>
          <Box  width='medium'>
            <Image src='https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/logo.svg' />
          </Box>
        </Box>
      </Box>
      <Box width='xxlarge' pad={{ vertical: 'small', horizontal: 'large'}} background='background-front' direction='row' gap='medium'>
        <Text size='small' color='text-weak'>&copy;2020-2023 上海缓存命中科技有限公司 版权所有</Text>
        <Text size='small' color='text-weak'>沪ICP备2020027200号-3</Text>
      </Box>
    </Box>
  );
}