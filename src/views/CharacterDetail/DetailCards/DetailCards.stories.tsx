import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import useLanguages from '../../../hooks/useLanguages/useLanguages';
import DetailCards from './DetailCards';
import { expect, within } from '@storybook/test';

const comics = [
	{
		id: 47176,
		title: 'FREE COMIC BOOK DAY 2013 1 (2013) #1',
		modified: 2019,
		image: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3.jpg',
	},
	{
		id: 40628,
		title: 'Hulk (2008) #55',
		modified: 2012,
		image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/5ba3d0869c543.jpg',
	},
	{
		id: 40630,
		title: 'Hulk (2008) #54',
		modified: 2012,
		image: 'http://i.annihil.us/u/prod/marvel/i/mg/f/00/5ba3c7cd5f1e2.jpg',
	},
	{
		id: 40632,
		title: 'Hulk (2008) #53',
		modified: 2012,
		image: 'http://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a.jpg',
	},
];

const meta: Meta<typeof DetailCards> = {
	title: 'views/CharacterDetail/DetailCards',
	component: DetailCards,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <DetailCardsDocumentation />,
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DetailsCards: Story = {
	args: {
		comics,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const detailCardsComponent = canvas.getByTestId('detail-cards');
		expect(detailCardsComponent).toBeInTheDocument();

		const mainCards = canvas.getByTestId('main-cards');
		expect(mainCards).toBeInTheDocument();

		const comicCards = mainCards.querySelectorAll('.detail-card');
		expect(comicCards.length).toBe(comics.length);
	},
};

const DetailCardsDocumentation = () => {
	const { Switch, language } = useLanguages();

	return (
		<>
			{Switch}
			{language === 'en' ? (
				<div>
					<h1>DetailCards</h1>
					<p>
						The <code>DetailCards</code> component renders a list of comic cards associated with a
						specific character.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>comics</strong>: An array of comic details. Each comic should have an{' '}
							<code>id</code>, <code>title</code>, <code>modified</code> date, and an{' '}
							<code>image</code> URL.
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
							The <code>DetailCards</code> component internally uses the <code>DetailCard</code>{' '}
							component to render each comic.
						</li>
					</ul>

					<h3>Testing</h3>
					<p>
						To ensure the quality and proper functioning of the <code>DetailCards</code> component,
						consider the following tests:
					</p>
					<ul>
						<li>
							<strong>Rendering</strong>: Verifies that the component renders correctly with the
							provided comics data.
						</li>
						<li>
							<strong>Empty State</strong>: Ensures that the component correctly handles the case
							when no comics are provided.
						</li>
					</ul>
				</div>
			) : (
				<div>
					<h1>DetailCards</h1>
					<p>
						El componente <code>DetailCards</code> renderiza una lista de tarjetas de cómics
						asociadas con un personaje específico.
					</p>

					<h3>Props</h3>
					<ul>
						<li>
							<strong>comics</strong>: Una matriz de detalles de cómics. Cada cómic debe tener un{' '}
							<code>id</code>, <code>title</code>, fecha de <code>modified</code> y una URL de{' '}
							<code>image</code>.
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
							El componente <code>DetailCards</code> utiliza internamente el componente{' '}
							<code>DetailCard</code> para renderizar cada cómic.
						</li>
					</ul>

					<h3>Pruebas</h3>
					<p>
						Para asegurar la calidad y el correcto funcionamiento del componente{' '}
						<code>DetailCards</code>, considera las siguientes pruebas:
					</p>
					<ul>
						<li>
							<strong>Renderización</strong>: Verifica que el componente se renderiza correctamente
							con los datos de cómics proporcionados.
						</li>
						<li>
							<strong>Estado Vacío</strong>: Asegura que el componente maneja correctamente el caso
							cuando no se proporcionan cómics.
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
