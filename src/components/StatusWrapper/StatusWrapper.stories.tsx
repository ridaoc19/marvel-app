import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import useLanguages from '../../hooks/useLanguages/useLanguages';
import StatusWrapper from './StatusWrapper';

const meta: Meta<typeof StatusWrapper> = {
	title: 'components/StatusWrapper',
	component: StatusWrapper,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <StatusWrapperDocumentation />,
		},
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StatusWrappers: Story = {
	play: async ({ canvasElement }) => {
		const { getByTestId } = within(canvasElement);
		await expect(getByTestId('status-wrapper')).toBeInTheDocument();
	},
};

const StatusWrapperDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>StatusWrapper</h1>
					<p>
						The <code>StatusWrapper</code> component is used to conditionally
						render its children based on the loading and error states.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>children</strong>: The content to be displayed when
							neither loading nor error states are active.
						</li>
						<li>
							<strong>isLoading</strong>: A boolean that indicates if the
							content is currently loading.
						</li>
						<li>
							<strong>renderError</strong>: A boolean that indicates if an error
							occurred while loading the content.
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
							When <code>isLoading</code> is true, the <code>Loading</code>{' '}
							component is displayed.
						</li>
						<li>
							When <code>renderError</code> is true and <code>isLoading</code>{' '}
							is false, the <code>NotFound</code> component is displayed.
						</li>
						<li>
							If both <code>isLoading</code> and <code>renderError</code> are
							false, the children components are rendered.
						</li>
					</ul>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the{' '}
						<code>StatusWrapper</code> component, the following tests have been
						included:
					</p>
					<ul>
						<li>
							<strong>Renderización del Contenedor</strong>: Verifica que el
							contenedor principal se renderice correctamente y esté presente en
							el DOM.
						</li>
						<li>
							<strong>Renderización del Estado de Carga</strong>: Verifica que
							el componente <code>Loading</code> se renderice correctamente
							cuando <code>isLoading</code> es verdadero.
						</li>
						<li>
							<strong>Renderización del Estado de Error</strong>: Verifica que
							el componente <code>NotFound</code> se renderice correctamente
							cuando <code>renderError</code> es verdadero.
						</li>
					</ul>
					<p>
						These tests ensure that the <code>StatusWrapper</code> component
						renders correctly and handles the loading and error states as
						expected. You can check these tests in the <code>Interactions</code>{' '}
						section.
					</p>
				</div>
			) : (
				<div>
					<h1>StatusWrapper</h1>
					<p>
						El componente <code>StatusWrapper</code> se utiliza para renderizar
						condicionalmente su contenido en función de los estados de carga y
						error.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>children</strong>: El contenido que se mostrará cuando no
							haya estados de carga ni error activos.
						</li>
						<li>
							<strong>isLoading</strong>: Un booleano que indica si el contenido
							se está cargando actualmente.
						</li>
						<li>
							<strong>renderError</strong>: Un booleano que indica si ocurrió un
							error al cargar el contenido.
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
							Cuando <code>isLoading</code> es verdadero, se muestra el
							componente <code>Loading</code>.
						</li>
						<li>
							Cuando <code>renderError</code> es verdadero y{' '}
							<code>isLoading</code> es falso, se muestra el componente{' '}
							<code>NotFound</code>.
						</li>
						<li>
							Si tanto <code>isLoading</code> como <code>renderError</code> son
							falsos, se renderizan los componentes hijos.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>StatusWrapper</code>, se han incluido las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización del Contenedor</strong>: Verifica que el
							contenedor principal se renderice correctamente y esté presente en
							el DOM.
						</li>
						<li>
							<strong>Renderización del Estado de Carga</strong>: Verifica que
							el componente <code>Loading</code> se renderice correctamente
							cuando <code>isLoading</code> es verdadero.
						</li>
						<li>
							<strong>Renderización del Estado de Error</strong>: Verifica que
							el componente <code>NotFound</code> se renderice correctamente
							cuando <code>renderError</code> es verdadero.
						</li>
					</ul>
					<p>
						Estas pruebas aseguran que el componente <code>StatusWrapper</code>{' '}
						se renderice correctamente y maneje los estados de carga y error
						según lo esperado. Puedes verificar estas pruebas en la sección de{' '}
						<code>Interactions</code>.
					</p>
				</div>
			)}
		</>
	);
};
