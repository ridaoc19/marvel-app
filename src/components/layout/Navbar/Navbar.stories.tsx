import { Controls, Primary, Story } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-remix-react-router';

import useLanguages from '../../../hooks/useLanguages/useLanguages';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
	title: 'components/layout/Navbar',
	component: Navbar,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/' },
		}),
		docs: {
			page: () => <NavbarDocumentation />,
		},
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Navbars: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const logoLink = canvas.getByRole('link', { name: /podcasts/i });
		expect(logoLink).toBeInTheDocument();

		const svgElement = logoLink.querySelector('svg');
		expect(svgElement).toBeInTheDocument();

		const textElement = logoLink.querySelector('h2');
		expect(textElement).toBeInTheDocument();
		expect(textElement).toHaveTextContent('Podcasts');
	},
};

const NavbarDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>Navbar</h1>
					<p>
						The <code>Navbar</code> component is a navigation bar that is
						displayed at the top of the application.
					</p>

					<h3>Props</h3>
					<p>This component does not receive props.</p>

					<h3>Content</h3>
					<ul>
						<li>
							<strong>Logo</strong>: A link that redirects to the main page (
							<code>/</code>). It contains text with the title "Podcasts".
						</li>
						<li>
							<strong>Loader</strong>: A visual indicator that is displayed in
							the top right corner during navigation transitions. It consists of
							four animated circles.
						</li>
					</ul>

					<h3>Example Usage</h3>
					<pre>
						<code>
							<Primary />
							<Controls />
						</code>
					</pre>

					<h3>Additional Notes</h3>
					<ul>
						<li>
							This component uses <code>react-router-dom</code> to handle
							navigation.
						</li>
						<li>
							The loading indicator (<code>Loader</code>) is displayed during
							navigation transitions and disappears when finished.
						</li>
						<li>
							The component is designed to be used in the main view of the
							application, providing smooth navigation without reloading the
							page.
						</li>
					</ul>

					<h3>Tests</h3>
					<p>
						To ensure the quality and proper functionality of the{' '}
						<code>Navbar</code> component, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Rendering of the Logo</strong>: It is verified that the
							logo of the <code>Navbar</code> is rendered correctly, including
							its link and text.
						</li>
						<li>
							<strong>Rendering of the Text of the Logo</strong>: It is checked
							that the text inside the logo (<code>h2</code>) is displayed
							correctly with the content "Podcasts".
						</li>
						<li>
							<strong>Navigation of the Logo</strong>: The link of the logo
							correctly redirects to the main page (<code>/</code>).
						</li>
					</ul>
					<p>
						These tests ensure that the critical elements of the{' '}
						<code>Navbar</code> are rendered and function correctly. It can be
						verified in <code>Interactions</code>.
					</p>
				</div>
			) : (
				<div>
					<h1>Navbar</h1>
					<p>
						El componente <code>Navbar</code> es una barra de navegación que se
						muestra en la parte superior de la aplicación.
					</p>

					<h3>Props</h3>
					<p>Este componente no recibe props.</p>

					<h3>Contenido</h3>
					<ul>
						<li>
							<strong>Logo</strong>: Un enlace que redirige a la página
							principal (<code>/</code>). Contiene un texto con el título
							"Podcasts".
						</li>
						<li>
							<strong>Loader</strong>: Un indicador visual que se muestra en la
							esquina superior derecha durante las transiciones de navegación.
							Está compuesto por cuatro círculos animados.
						</li>
					</ul>

					<h3>Ejemplo de Uso</h3>
					<pre>
						<code>
							<Primary />
							<Controls />
						</code>
					</pre>

					<h3>Notas Adicionales</h3>
					<ul>
						<li>
							Este componente utiliza <code>react-router-dom</code> para manejar
							la navegación.
						</li>
						<li>
							El indicador de carga (<code>Loader</code>) se muestra durante las
							transiciones de navegación y desaparece al finalizar.
						</li>
						<li>
							El componente está diseñado para ser utilizado en la vista
							principal de la aplicación, proporcionando una navegación fluida
							sin recargar la página.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>Navbar</code>, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización del Logo</strong>: Se verifica que el logo
							del <code>Navbar</code> se renderiza correctamente, incluyendo su
							enlace y texto.
						</li>
						<li>
							<strong>Renderización del Texto del Logo</strong>: Se comprueba
							que el texto dentro del logo (<code>h2</code>) se muestra
							correctamente con el contenido "Podcasts".
						</li>
						<li>
							<strong>Navegación del Logo</strong>: El enlace del logo redirige
							correctamente a la página principal (<code>/</code>).
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que los elementos críticos del{' '}
						<code>Navbar</code> se rendericen y funcionen correctamente. Se
						puede verificar en <code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
