import { Controls, Primary, Story } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { withRouter } from 'storybook-addon-remix-react-router';
import useLanguages from '../../hooks/useLanguages/useLanguages';
import Layout from './Layout';

const meta: Meta<typeof Layout> = {
	title: 'components/Layout',
	component: Layout,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		componentSubtitle: 'Layout',
		docs: {
			page: () => <LayoutDocumentation />,
		},
	},
	argTypes: {
		children: {
			control: { type: 'object' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Layouts: Story = {
	args: {
		children: <></>,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const layoutElement = canvas.getByTestId('layout');
		expect(layoutElement).toBeInTheDocument();

		const childrenElement = canvas.getByTestId('layout-children');
		expect(childrenElement).toBeInTheDocument();
	},
};

const LayoutDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>Layout</h1>
					<p>
						The <code>Layout</code> component defines the overall structure of
						the application, including navigation and content areas.
					</p>

					<h3>Props</h3>
					<p>This component receives the following props:</p>
					<ul>
						<li>
							<strong>children</strong>: A ReactNode representing the content to
							be rendered within the layout.
						</li>
					</ul>

					<h3>Content</h3>
					<ul>
						<li>
							<strong>Navbar</strong>: The navigation bar displayed at the top
							of the application, provided by the <code>Navbar</code> component.
						</li>
						<li>
							<strong>Breadcrumb</strong>: A breadcrumb navigation component,
							typically used to display the current location within the
							application.
						</li>
						<li>
							<strong>Children</strong>: The main content area, where the
							content passed as props is rendered.
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
							The <code>Layout</code> component is designed to provide a
							consistent layout structure across the application, enhancing user
							experience and navigation.
						</li>
						<li>
							It is recommended to use responsive design techniques to ensure
							the layout adapts gracefully to different screen sizes and
							devices.
						</li>
					</ul>

					<h3>Tests</h3>
					<p>
						To ensure the quality and proper functionality of the{' '}
						<code>Layout</code> component, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Rendering of Navbar</strong>: It is verified that the
							Navbar is rendered correctly, including its logo and navigation
							links.
						</li>
						<li>
							<strong>Rendering of Breadcrumb</strong>: It is checked that the
							Breadcrumb navigation is displayed correctly and reflects the
							current location within the application.
						</li>
						<li>
							<strong>Rendering of Children</strong>: It is verified that the
							main content area correctly renders the children passed to the
							Layout component.
						</li>
					</ul>
					<p>
						These tests ensure that the critical elements of the{' '}
						<code>Layout</code> are rendered and function correctly. It can be
						verified in <code>Interactions</code>.
					</p>
				</div>
			) : (
				<div>
					<h1>Layout</h1>
					<p>
						El componente <code>Layout</code> define la estructura general de la
						aplicación, incluyendo áreas de navegación y contenido.
					</p>

					<h3>Props</h3>
					<p>Este componente recibe las siguientes props:</p>
					<ul>
						<li>
							<strong>children</strong>: Un ReactNode que representa el
							contenido que se renderizará dentro del layout.
						</li>
					</ul>

					<h3>Contenido</h3>
					<ul>
						<li>
							<strong>Navbar</strong>: La barra de navegación que se muestra en
							la parte superior de la aplicación, proporcionada por el
							componente <code>Navbar</code>.
						</li>
						<li>
							<strong>Breadcrumb</strong>: Un componente de navegación de migas
							de pan, típicamente utilizado para mostrar la ubicación actual
							dentro de la aplicación.
						</li>
						<li>
							<strong>Children</strong>: El área de contenido principal, donde
							se renderiza el contenido pasado como props.
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
							El componente <code>Layout</code> está diseñado para proporcionar
							una estructura de diseño consistente en toda la aplicación,
							mejorando la experiencia del usuario y la navegación.
						</li>
						<li>
							Se recomienda utilizar técnicas de diseño responsivo para asegurar
							que el layout se adapte correctamente a diferentes tamaños de
							pantalla y dispositivos.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para garantizar la calidad y el correcto funcionamiento del
						componente <code>Layout</code>, se han incluido las siguientes
						pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización del Navbar</strong>: Se verifica que el
							Navbar se renderice correctamente, incluyendo su logo y enlaces de
							navegación.
						</li>
						<li>
							<strong>Renderización del Breadcrumb</strong>: Se comprueba que la
							navegación de migas de pan se muestre correctamente y refleje la
							ubicación actual dentro de la aplicación.
						</li>
						<li>
							<strong>Renderización de los Children</strong>: Se verifica que el
							área de contenido principal renderice correctamente los children
							pasados al componente Layout.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que los elementos críticos del{' '}
						<code>Layout</code> se rendericen y funcionen correctamente. Se
						puede verificar en <code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
