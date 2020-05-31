import React , { useEffect }  from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store';
import { View , Text, } from 'react-native';

function UserContainer({ userData, fetchUsers}) {
    useEffect(() => {
            fetchUsers()
         }, [fetchUsers]
    )
        return userData.loading ? (
            <Text>Loading</Text>
        ) : userData.error ? (
            <Text>{userData.error}</Text>
        ) : (
            <View>
                <Text>User List</Text>
                <View>
                    {
                        userData && 
                        userData.users && 
                        userData.users.map(user => <p key={user.id}>{user.name}</p>)
                    }
                </View>
            </View>
        )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
