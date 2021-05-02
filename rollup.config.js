import css from 'rollup-plugin-import-css';
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';

export default [
	{
		input: 'src/index.tsx',
		external: ['playerclient'],
		output: [
			{ dir: 'dist', format: 'cjs' }
		],
    plugins: [
      typescript(),
      image(),
      css(),
    ],
	},
];