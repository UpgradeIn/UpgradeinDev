<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Filters;
use Filament\Tables\Actions;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;
    protected static ?string $navigationIcon = 'heroicon-o-folder';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required(),

                Forms\Components\TextInput::make('name')
                    ->required(),

                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->unique('projects', 'slug', ignoreRecord: true),

                // Banner Image
                Forms\Components\FileUpload::make('banner_image')
                    ->label('Banner Image')
                    ->directory('project-banners')
                    ->image()
                    ->default(fn($record) => $record?->banner_image_path) // ✅ Preview saat edit
                    ->downloadable(),

                // Multiple Project Images
                Forms\Components\Repeater::make('project_images')
                    ->schema([
                        Forms\Components\FileUpload::make('image')
                            ->label('Project Image')
                            ->directory('project-images')
                            ->image()
                            ->default(fn($state) => asset('storage/' . $state)) // ✅ Preview saat edit
                            ->downloadable(),
                    ])
                    ->collapsible(),

                Forms\Components\Textarea::make('description')
                    ->rows(5),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('slug')->sortable(),
                Tables\Columns\TextColumn::make('category.name')
                    ->label('Category')
                    ->sortable(),
                Tables\Columns\ImageColumn::make('banner_image')
                    ->label('Banner Image'),
                Tables\Columns\TextColumn::make('deleted_at')
                    ->label('Deleted At')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Filters\TrashedFilter::make(), // Filter Soft Delete
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\RestoreAction::make(), // Restore
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\ForceDeleteAction::make(), // Force Delete
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\RestoreBulkAction::make(), // Bulk Restore
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(), // Bulk Force Delete
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::$model::count();
    }

    public static function getNavigationSort(): ?int
    {
        return 1;
    }

}
