import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-remix-react-router';
import NotFound from './NotFound';
import useLanguages from '../../hooks/useLanguages/useLanguages';
import { Controls, Primary } from '@storybook/blocks';

const meta: Meta<typeof NotFound> = {
	title: 'components/NotFound',
	component: NotFound,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		docs: {
			page: () => <NotFoundDocumentation />,
		},
		reactRouter: reactRouterParameters({
			routing: { path: '/' },
		}),
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NotFounds: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const logoLink = canvas.getByTestId('not-found-logo');
		expect(logoLink).toBeInTheDocument();

		const title = canvas.getByText('404 - Page Not Found');
		expect(title).toBeInTheDocument();

		const message = canvas.getByText(
			"We're sorry, the page you requested is unavailable.",
		);
		expect(message).toBeInTheDocument();

		const button = canvas.getByText('home');
		expect(button).toBeInTheDocument();
	},
};

const NotFoundDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>NotFound</h1>
					<p>
						The <code>NotFound</code> component displays a 404 error page when a
						user navigates to a route that does not exist.
					</p>

					<h3>Props</h3>
					<p>No props are required for this component.</p>

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
							The <code>NotFound</code> component uses the{' '}
							<code>useContext</code> hook to access and clear the podcast state
							when navigating back to the home page.
						</li>
						<li>
							It also uses the <code>useNavigate</code> hook from{' '}
							<code>react-router-dom</code> to programmatically navigate to the
							home page.
						</li>
						<li>
							The component renders a logo, a title, a message, and a button to
							return to the home page.
						</li>
					</ul>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the{' '}
						<code>NotFound</code> component, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Renderización del Logo</strong>: Verifica que el logo se
							renderice correctamente y que esté presente en el DOM.
						</li>
						<li>
							<strong>Renderización del Título</strong>: Verifica que el título
							"404 - Page Not Found" se renderice correctamente.
						</li>
						<li>
							<strong>Renderización del Mensaje</strong>: Verifica que el
							mensaje "We're sorry, the page you requested is unavailable." se
							renderice correctamente.
						</li>
						<li>
							<strong>Renderización del Botón</strong>: Verifica que el botón
							con el texto "home" se renderice correctamente.
						</li>
					</ul>
					<p>
						These tests ensure that the <code>NotFound</code> component renders
						properly and provides the intended user feedback. You can check
						these tests in the <code>Interactions</code> section.
					</p>
				</div>
			) : (
				<div>
					<h1>NotFound</h1>
					<p>
						El componente <code>NotFound</code> muestra una página de error 404
						cuando un usuario navega a una ruta que no existe.
					</p>

					<h3>Props</h3>
					<p>Este componente no requiere props.</p>

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
							El componente <code>NotFound</code> utiliza el hook{' '}
							<code>useContext</code> para acceder y limpiar el estado del
							podcast cuando se navega de regreso a la página principal.
						</li>
						<li>
							También utiliza el hook <code>useNavigate</code> de{' '}
							<code>react-router-dom</code> para navegar programáticamente a la
							página principal.
						</li>
						<li>
							El componente renderiza un logo, un título, un mensaje y un botón
							para regresar a la página principal.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>NotFound</code>, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización del Logo</strong>: Verifica que el logo se
							renderice correctamente y que esté presente en el DOM.
						</li>
						<li>
							<strong>Renderización del Título</strong>: Verifica que el título
							"404 - Page Not Found" se renderice correctamente.
						</li>
						<li>
							<strong>Renderización del Mensaje</strong>: Verifica que el
							mensaje "We're sorry, the page you requested is unavailable." se
							renderice correctamente.
						</li>
						<li>
							<strong>Renderización del Botón</strong>: Verifica que el botón
							con el texto "home" se renderice correctamente.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que el componente <code>NotFound</code> se
						renderice adecuadamente y proporcione la retroalimentación de
						usuario prevista. Puedes verificar estas pruebas en la sección de{' '}
						<code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
