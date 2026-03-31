export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesDeleting = (key, heroes, deleteHero) => {
    deleteHero();
    return {
        type: "HEROES_DELETING",
        payload: heroes.filter(hero => hero.id != key)
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}