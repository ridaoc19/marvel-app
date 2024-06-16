import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import StatusWrapper from '../../../components/StatusWrapper/StatusWrapper';
import useFilterData from '../../../hooks/useFilterData';
import useLanguages from '../../../hooks/useLanguages/useLanguages';
import _color from '../../../styles/index/global/_color';
import DetailResume from './DetailResume';

const meta: Meta<typeof DetailResume> = {
	title: 'views/CharacterDetail/DetailResume',
	component: DetailResume,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: _color['--marvel-black'],
				},
			],
		},
		docs: {
			page: () => <DetailResumeDocumentation />,
		},
		reactRouter: reactRouterParameters({
			location: {
				pathParams: { characterId: 1010354 },
			},
			routing: { path: '/character/:characterId' },
		}),
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

const Render = () => {
	const {
		comics: { name, image, favorite, description, id },
		isLoading,
		isError,
	} = useFilterData();
	return (
		<StatusWrapper isLoading={isLoading} renderError={isError}>
			<DetailResume
				id={id}
				name={name}
				image={image}
				favorite={favorite}
				description={description}
			/>
		</StatusWrapper>
	);
};

export const DetailsResume: Story = {
	render: () => <Render />,
};

const DetailResumeDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>DetailResume</h1>
					<p>
						The <code>DetailResume</code> component provides a detailed view of a character's
						profile, including their name, description, image, and a favorite button.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>id</strong>: The unique identifier of the character.
						</li>
						<li>
							<strong>name</strong>: The name of the character.
						</li>
						<li>
							<strong>description</strong>: The description of the character.
						</li>
						<li>
							<strong>favorite</strong>: Boolean indicating if the character is marked as favorite.
						</li>
						<li>
							<strong>image</strong>: The URL of the character's image.
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
							The <code>DetailResume</code> component uses the <code>useContext</code> hook to
							toggle the favorite status of the character.
						</li>
					</ul>
				</div>
			) : (
				<div>
					<h1>DetailResume</h1>
					<p>
						El componente <code>DetailResume</code> proporciona una vista detallada del perfil de un
						personaje, incluyendo su nombre, descripción, imagen y un botón de favorito.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>id</strong>: El identificador único del personaje.
						</li>
						<li>
							<strong>name</strong>: El nombre del personaje.
						</li>
						<li>
							<strong>description</strong>: La descripción del personaje.
						</li>
						<li>
							<strong>favorite</strong>: Booleano que indica si el personaje está marcado como
							favorito.
						</li>
						<li>
							<strong>image</strong>: La URL de la imagen del personaje.
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
							El componente <code>DetailResume</code> utiliza el hook <code>useContext</code> para
							alternar el estado de favorito del personaje.
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
