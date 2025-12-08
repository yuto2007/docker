'use client';

import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

interface GradientButtonProps extends ButtonProps {
  text: string;
  icon?: React.ReactNode;
  // 追加：グラデーションのCSS文字列（省略時はデフォルトのレインボー）
  gradient?: string; 
  // 追加：影の色（省略時はデフォルトの青系）
  shadowColor?: string; 
}

export default function GradientButton({ 
  text, 
  onClick, 
  icon, 
  // デフォルト値をここで設定
  gradient = 'linear-gradient(90deg, #4CAF50 0%, #2196F3 50%, #9C27B0 100%)',
  shadowColor = 'rgba(33, 150, 243, 0.4)',
  sx, 
  ...props 
}: GradientButtonProps) {
  
  return (
    <Button
      onClick={onClick}
      startIcon={icon || <AutoAwesomeIcon />}
      {...props}
      sx={{
        fontFamily: '"DotGothic16", sans-serif',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1rem',
        textTransform: 'none',
        
        // ★ここが変更点：引数で渡されたグラデーションを使う
        background: gradient,
        backgroundSize: '200% auto', 
        
        borderRadius: '50px', 
        border: 'none',
        px: 4,
        py: 1.5,
        width: '100%',
        maxWidth: '400px',
        
        // ★ここが変更点：引数で渡された影色を使う
        boxShadow: `0 4px 15px ${shadowColor}`,
        
        transition: 'all 0.5s ease',
        
        '&:hover': {
          backgroundPosition: 'right center',
          // ホバー時は影を少し濃くする等の調整
          boxShadow: `0 6px 20px ${shadowColor}`, 
          transform: 'translateY(-2px)',
          filter: 'brightness(1.1)', // 少し明るくして光らせる
        },
        
        ...sx, 
      }}
    >
      {text}
    </Button>
  );
}