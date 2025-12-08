'use client';

import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Box,
  Zoom,
  Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { DotGothic16 } from 'next/font/google'
import RainbowText from '@/components/ui/text/RainbowText'

const dotGothic16 = DotGothic16({ subsets: ['latin'], weight: '400' });

// アニメーションの設定
const Transition = React.forwardRef(function Transition(props: any, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function AboutUsModalGlass() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
<Tooltip title="About Us">
        <IconButton
          onClick={handleClickOpen}
          sx={{
            backgroundColor: 'transparent',
            width: 48,  // 幅と高さを指定して正円にする
            height: 48,
            borderRadius: '50%', // 完全な円形にする
            border: '1px solid', // 薄い枠線を追加して他のボタンと質感を合わせる
            borderColor: 'transparent',
            transition: 'all 0.3s ease', // ホバー時のアニメーション
            '&:hover': {
              backgroundColor: 'grey.50', // ホバー時に少しだけ色を変える
              boxShadow: '0 6px 16px rgba(0,0,0,0.15)', // ホバー時に影を少し強く
              transform: 'translateY(-2px)', // 少し浮き上がる演出
            },
          }}
        >
          {/* アイコンの色はテーマのプライマリーカラーや、ドット絵の色に合わせて調整してください */}
          <HelpOutlineIcon sx={{ color: 'primary.main' }} />
        </IconButton>
      </Tooltip>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        // ここがポイント：背景のぼかしとPaperの透明化
        PaperProps={{
          sx: {
            borderRadius: '24px', // 丸みを強く
            background: 'rgba(255, 255, 255, 0.75)', // 半透明の白
            backdropFilter: 'blur(16px)', // すりガラス効果
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // 柔らかい影
            border: '1px solid rgba(255, 255, 255, 0.18)',
            maxWidth: '500px',
            width: '100%',
            overflow: 'visible', // アイコンをはみ出させるために必要
          },
        }}
        // モーダルの外側の背景色（暗くする）
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(4px)', // 背景全体も少しぼかす
            },
          },
        }}
      >
        {/* 閉じるボタンを右上に浮かせる */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: 'grey.600',
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogTitle sx={{ textAlign: 'center', pt: 6, pb: 1 }}>
          <Typography variant="overline" display="block" sx={{ letterSpacing: 3, color: 'primary.main', fontWeight: 'bold' }}>
            About Us
          </Typography>
        <RainbowText className={dotGothic16.className} sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          デジタル交換日記とは
        </RainbowText>
        </DialogTitle>

        <DialogContent sx={{ pb: 6, px: 4, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            グループ内で順番に日記を渡しあうという、アナログの良さと、
            写真やリンクなどが簡単に載せられるというデジタルの良さを融合させた、新しい形の交換日記サービスです。
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}